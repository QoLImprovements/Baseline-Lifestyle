/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "serving-4-slices",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-172945",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "serving-4-slices",
      "kind": "unit",
      "label": "serving (4 slices)"
    }
  ],
  "name": "Oscar Mayer, Chicken Breast (honey glazed)",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.3,
    "energy_kcal": 109.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.13,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 289.0,
    "potassium_mg": 329.0,
    "protein_g": 19.8,
    "salt_g": 3.6,
    "sat_fat_g": 0.394,
    "sodium_mg": 1440.0,
    "sugar_g": 4.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172945",
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
