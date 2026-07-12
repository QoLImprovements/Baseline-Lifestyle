/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "6 samples, 5 brands; cooked in conventional and microwave ovens according to packet directions",
  "id": "cofid-old-15-074",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chilli, vegetable, retail",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 9.4,
    "energy_kcal": 70.0,
    "fat_g": 2.1,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 1.3,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 260.0,
    "protein_g": 4.0,
    "salt_g": 1.05,
    "sat_fat_g": 0.2,
    "sodium_mg": 420.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "15-074",
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
