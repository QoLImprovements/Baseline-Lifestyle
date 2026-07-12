/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "12 samples, 5 brands",
  "id": "cofid-old-12-031",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, skimmed, dried, fortified, with vegetable fat",
  "nutritionPerBasis": {
    "calcium_mg": 840.0,
    "carbs_g": 42.6,
    "energy_kcal": 487.0,
    "fat_g": 25.9,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 0.19,
    "magnesium_mg": 74.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 680.0,
    "potassium_mg": 1030.0,
    "protein_g": 23.3,
    "salt_g": 1.1,
    "sat_fat_g": 16.8,
    "sodium_mg": 440.0,
    "sugar_g": 42.6,
    "vitamin_a_ug": 398.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-031",
  "state": "Dried",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "dried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
