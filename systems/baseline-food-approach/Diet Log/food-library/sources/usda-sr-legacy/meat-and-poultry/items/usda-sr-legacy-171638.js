/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-pieces",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-171638",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "3-pieces",
      "kind": "unit",
      "label": "3 pieces"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Meatballs, frozen, Italian style",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 8.06,
    "energy_kcal": 286.0,
    "fat_g": 22.2,
    "fibre_g": 2.3,
    "folate_ug": 36.0,
    "iron_mg": 1.77,
    "magnesium_mg": 31.0,
    "omega3_g": 0.185,
    "phosphorus_mg": 239.0,
    "potassium_mg": 296.0,
    "protein_g": 14.4,
    "salt_g": 1.665,
    "sat_fat_g": 7.63,
    "sodium_mg": 666.0,
    "sugar_g": 3.47,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 8.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171638",
  "state": "Frozen",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "frozen",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
