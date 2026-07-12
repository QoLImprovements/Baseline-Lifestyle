/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "frankfurter",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171634",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "frankfurter",
      "kind": "unit",
      "label": "frankfurter"
    }
  ],
  "name": "Frankfurter, meat and poultry, cooked, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 5.24,
    "energy_kcal": 1260.0,
    "fat_g": 26.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 1.15,
    "magnesium_mg": 12.0,
    "omega3_g": 0.284,
    "phosphorus_mg": 192.0,
    "potassium_mg": 387.0,
    "protein_g": 10.7,
    "salt_g": 2.7,
    "sat_fat_g": 8.22,
    "sodium_mg": 1080.0,
    "sugar_g": 2.85,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 19.2,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171634",
  "state": "Grilled",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "grilled",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
