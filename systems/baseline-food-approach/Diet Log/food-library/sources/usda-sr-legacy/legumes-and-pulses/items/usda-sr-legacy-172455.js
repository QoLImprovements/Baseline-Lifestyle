/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "patty-approx-2-1-4-dia",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172455",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "patty-approx-2-1-4-dia",
      "kind": "unit",
      "label": "patty (approx 2-1/4\" dia)"
    }
  ],
  "name": "Falafel, home-prepared",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 31.8,
    "energy_kcal": 1390.0,
    "fat_g": 17.8,
    "fibre_g": 0.0,
    "folate_ug": 93.0,
    "iron_mg": 3.42,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 192.0,
    "potassium_mg": 585.0,
    "protein_g": 13.3,
    "salt_g": 0.735,
    "sat_fat_g": 2.38,
    "sodium_mg": 294.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172455",
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
