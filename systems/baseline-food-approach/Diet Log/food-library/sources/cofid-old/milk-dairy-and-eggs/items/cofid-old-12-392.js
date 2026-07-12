/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands",
  "id": "cofid-old-12-392",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream, dairy, premium",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 16.8,
    "energy_kcal": 215.0,
    "fat_g": 15.1,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.0,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 174.0,
    "protein_g": 3.9,
    "salt_g": 0.15,
    "sat_fat_g": 9.06,
    "sodium_mg": 60.0,
    "sugar_g": 16.7,
    "vitamin_a_ug": 177.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-392",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
