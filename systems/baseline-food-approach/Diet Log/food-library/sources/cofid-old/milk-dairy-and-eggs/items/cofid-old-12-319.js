/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 2 brands, polybottles",
  "id": "cofid-old-12-319",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, whole, sterilised",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 4.5,
    "energy_kcal": 66.0,
    "fat_g": 3.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.18,
    "magnesium_mg": 13.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 91.0,
    "potassium_mg": 140.0,
    "protein_g": 3.5,
    "salt_g": 0.1425,
    "sat_fat_g": 2.38,
    "sodium_mg": 57.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-319",
  "state": "Unspecified",
  "subcategory": "BAK",
  "tags": [
    "bak",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
