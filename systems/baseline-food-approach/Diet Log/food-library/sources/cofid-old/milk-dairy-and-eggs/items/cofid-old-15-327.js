/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Calculated from 15-323 made up with water and egg according to packet directions",
  "id": "cofid-old-15-327",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vegebanger mix, made up with water and egg",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 11.3,
    "energy_kcal": 180.0,
    "fat_g": 7.9,
    "fibre_g": 0.0,
    "folate_ug": 52.0,
    "iron_mg": 3.2,
    "magnesium_mg": 53.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 400.0,
    "protein_g": 16.7,
    "salt_g": 1.35,
    "sat_fat_g": 3.0,
    "sodium_mg": 540.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-327",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
