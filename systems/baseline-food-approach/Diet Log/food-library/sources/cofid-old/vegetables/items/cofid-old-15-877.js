/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from literature sources. Dissection of shop-bought samples",
  "id": "cofid-old-15-877",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad, vegetable, canned",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 13.4,
    "energy_kcal": 133.0,
    "fat_g": 8.5,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.77,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 127.0,
    "protein_g": 1.6,
    "salt_g": 0.735,
    "sat_fat_g": 0.0,
    "sodium_mg": 294.0,
    "sugar_g": 6.7,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 4.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-877",
  "state": "Canned",
  "subcategory": "DR",
  "tags": [
    "canned",
    "dr",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
