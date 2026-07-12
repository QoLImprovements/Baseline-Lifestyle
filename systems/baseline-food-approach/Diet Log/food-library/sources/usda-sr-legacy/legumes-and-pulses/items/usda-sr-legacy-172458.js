/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "2-tablespoon",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172458",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "2-tablespoon",
      "kind": "unit",
      "label": "2 tablespoon"
    }
  ],
  "name": "Peanut butter, smooth, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 35.6,
    "energy_kcal": 520.0,
    "fat_g": 34.0,
    "fibre_g": 5.2,
    "folate_ug": 60.0,
    "iron_mg": 1.9,
    "magnesium_mg": 170.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 369.0,
    "potassium_mg": 669.0,
    "protein_g": 25.9,
    "salt_g": 1.35,
    "sat_fat_g": 5.76,
    "sodium_mg": 540.0,
    "sugar_g": 9.28,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 9.04,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172458",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
