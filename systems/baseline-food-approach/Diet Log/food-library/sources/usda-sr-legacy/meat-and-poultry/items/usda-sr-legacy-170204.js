/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "slice-1-oz",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-170204",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz",
      "kind": "unit",
      "label": "slice (1 oz)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "package-2-5-oz",
      "kind": "unit",
      "label": "package, 2.5 oz"
    }
  ],
  "name": "Beef, cured, pastrami",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.36,
    "energy_kcal": 147.0,
    "fat_g": 5.82,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.22,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 175.0,
    "potassium_mg": 210.0,
    "protein_g": 21.8,
    "salt_g": 2.7,
    "sat_fat_g": 2.68,
    "sodium_mg": 1080.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170204",
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
