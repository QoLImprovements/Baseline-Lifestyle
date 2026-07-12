/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "link",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-174600",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "link",
      "kind": "unit",
      "label": "link"
    },
    {
      "gramsPerUnit": 450.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Sausage, turkey, breakfast links, mild, raw",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 3.18,
    "energy_kcal": 728.0,
    "fat_g": 10.4,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.34,
    "magnesium_mg": 20.0,
    "omega3_g": 0.201,
    "phosphorus_mg": 174.0,
    "potassium_mg": 258.0,
    "protein_g": 15.9,
    "salt_g": 1.785,
    "sat_fat_g": 2.82,
    "sodium_mg": 714.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174600",
  "state": "Raw",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "raw",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
