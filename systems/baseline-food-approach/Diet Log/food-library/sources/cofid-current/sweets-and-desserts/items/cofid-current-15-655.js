/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "Vegetable, lentil and barley base with potato topping. Recipe from manufacturer",
  "id": "cofid-current-15-655",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Shepherd's pie, vegetable, retail",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 13.3,
    "energy_kcal": 101.0,
    "fat_g": 4.9,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.6,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 240.0,
    "protein_g": 1.9,
    "salt_g": 0.525,
    "sat_fat_g": 2.0,
    "sodium_mg": 210.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 127.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-655",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
