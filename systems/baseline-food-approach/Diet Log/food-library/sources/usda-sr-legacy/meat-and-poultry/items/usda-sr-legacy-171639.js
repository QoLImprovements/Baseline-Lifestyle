/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171639",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.1,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bacon, turkey, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 4.24,
    "energy_kcal": 368.0,
    "fat_g": 25.9,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 2.63,
    "magnesium_mg": 30.0,
    "omega3_g": 0.392,
    "phosphorus_mg": 416.0,
    "potassium_mg": 666.0,
    "protein_g": 29.5,
    "salt_g": 5.05,
    "sat_fat_g": 6.93,
    "sodium_mg": 2020.0,
    "sugar_g": 4.24,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171639",
  "state": "Unspecified",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "meat-and-poultry",
    "sausages-and-luncheon-meats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
