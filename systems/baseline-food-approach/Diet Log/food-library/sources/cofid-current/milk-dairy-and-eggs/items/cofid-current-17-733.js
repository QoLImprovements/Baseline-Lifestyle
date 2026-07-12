/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "6 samples (Nesquik), 3 flavours",
  "id": "cofid-current-17-733",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk shake, powder",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 98.3,
    "energy_kcal": 388.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 200.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 150.0,
    "protein_g": 1.3,
    "salt_g": 0.05,
    "sat_fat_g": 0.0,
    "sodium_mg": 20.0,
    "sugar_g": 98.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 67.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-733",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "milk-dairy-and-eggs",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
