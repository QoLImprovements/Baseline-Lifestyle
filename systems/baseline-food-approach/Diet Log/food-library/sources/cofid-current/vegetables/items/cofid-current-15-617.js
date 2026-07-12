/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products",
  "id": "cofid-current-15-617",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sushi, vegetable",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 32.8,
    "energy_kcal": 148.0,
    "fat_g": 1.3,
    "fibre_g": 1.6,
    "folate_ug": 6.0,
    "iron_mg": 0.52,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 88.0,
    "protein_g": 3.4,
    "salt_g": 1.3025,
    "sat_fat_g": 0.0,
    "sodium_mg": 521.0,
    "sugar_g": 7.0,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-617",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
