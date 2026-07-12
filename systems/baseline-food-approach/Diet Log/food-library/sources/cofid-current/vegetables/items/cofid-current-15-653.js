/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe from manufacturer",
  "id": "cofid-current-15-653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pakora/bhajia, vegetable, retail",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 21.4,
    "energy_kcal": 238.0,
    "fat_g": 14.7,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 3.7,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 490.0,
    "protein_g": 6.4,
    "salt_g": 1.075,
    "sat_fat_g": 1.0,
    "sodium_mg": 430.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 161.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 3.66,
    "vitamin_k_ug": 72.1
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-653",
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
