/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "10-slices",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-170604",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "10-slices",
      "kind": "unit",
      "label": "10 slices"
    }
  ],
  "name": "Beef, cured, dried",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 2.76,
    "energy_kcal": 640.0,
    "fat_g": 1.94,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.42,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 181.0,
    "potassium_mg": 235.0,
    "protein_g": 31.1,
    "salt_g": 6.975,
    "sat_fat_g": 0.95,
    "sodium_mg": 2790.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170604",
  "state": "Dried",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "dried",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
