/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "4-slices",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171618",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "4-slices",
      "kind": "unit",
      "label": "4 slices"
    }
  ],
  "name": "Blood sausage",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 1.29,
    "energy_kcal": 379.0,
    "fat_g": 34.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 6.4,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 38.0,
    "protein_g": 14.6,
    "salt_g": 1.7,
    "sat_fat_g": 13.4,
    "sodium_mg": 680.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171618",
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
