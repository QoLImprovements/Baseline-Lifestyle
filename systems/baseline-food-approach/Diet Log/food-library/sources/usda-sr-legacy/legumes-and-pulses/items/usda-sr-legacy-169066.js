/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "slice-thin",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-169066",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "slice-thin",
      "kind": "unit",
      "label": "slice, thin"
    }
  ],
  "name": "Luncheon slices, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 4.44,
    "energy_kcal": 189.0,
    "fat_g": 11.1,
    "fibre_g": 1.1,
    "folate_ug": 100.0,
    "iron_mg": 1.8,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 442.0,
    "potassium_mg": 200.0,
    "protein_g": 17.8,
    "salt_g": 1.7775,
    "sat_fat_g": 1.34,
    "sodium_mg": 711.0,
    "sugar_g": 2.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169066",
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
