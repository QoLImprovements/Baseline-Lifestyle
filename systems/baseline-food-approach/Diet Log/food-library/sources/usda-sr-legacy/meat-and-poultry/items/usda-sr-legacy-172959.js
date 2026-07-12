/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-6-slices",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172959",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "serving-6-slices",
      "kind": "unit",
      "label": "serving 6 slices"
    }
  ],
  "name": "Pastrami, beef, 98% fat-free",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.54,
    "energy_kcal": 95.0,
    "fat_g": 1.16,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.78,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 228.0,
    "protein_g": 19.6,
    "salt_g": 2.525,
    "sat_fat_g": 0.0,
    "sodium_mg": 1010.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 34.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172959",
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
