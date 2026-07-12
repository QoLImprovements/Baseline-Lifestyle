/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records and dissection of shop-bought samples",
  "id": "cofid-current-15-805",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Flan, vegetable, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 16.7,
    "energy_kcal": 191.0,
    "fat_g": 11.9,
    "fibre_g": 3.1,
    "folate_ug": 13.0,
    "iron_mg": 0.69,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 123.0,
    "potassium_mg": 172.0,
    "protein_g": 5.4,
    "salt_g": 0.355,
    "sat_fat_g": 7.26,
    "sodium_mg": 142.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 441.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-805",
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
