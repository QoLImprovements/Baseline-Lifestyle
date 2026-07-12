/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, including Genoa, sultana and cherry slab, Manor House and country slices",
  "id": "cofid-current-11-829",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, fruit, retail",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 55.2,
    "energy_kcal": 334.0,
    "fat_g": 12.1,
    "fibre_g": 3.0,
    "folate_ug": 0.0,
    "iron_mg": 1.55,
    "magnesium_mg": 20.0,
    "omega3_g": 0.44,
    "phosphorus_mg": 113.0,
    "potassium_mg": 385.0,
    "protein_g": 4.5,
    "salt_g": 0.4825,
    "sat_fat_g": 4.64,
    "sodium_mg": 193.0,
    "sugar_g": 39.6,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 7.26
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-829",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
