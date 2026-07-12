/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 3 brands including chocolate, vanilla, and banana",
  "id": "cofid-current-12-327",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milkshake, thick, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 15.3,
    "energy_kcal": 88.0,
    "fat_g": 1.8,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.0,
    "magnesium_mg": 13.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 120.0,
    "potassium_mg": 171.0,
    "protein_g": 3.7,
    "salt_g": 0.1425,
    "sat_fat_g": 1.21,
    "sodium_mg": 57.0,
    "sugar_g": 11.1,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-327",
  "state": "Unspecified",
  "subcategory": "BAR",
  "tags": [
    "bar",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
