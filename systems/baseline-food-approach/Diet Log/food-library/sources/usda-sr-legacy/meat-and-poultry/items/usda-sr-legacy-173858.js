/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-1-serving",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-173858",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "serving-1-serving",
      "kind": "unit",
      "label": "serving (1 serving)"
    }
  ],
  "name": "Chicken spread",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 4.05,
    "energy_kcal": 663.0,
    "fat_g": 17.6,
    "fibre_g": 0.3,
    "folate_ug": 3.0,
    "iron_mg": 0.87,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 106.0,
    "protein_g": 18.0,
    "salt_g": 1.805,
    "sat_fat_g": 3.23,
    "sodium_mg": 722.0,
    "sugar_g": 0.47,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173858",
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
