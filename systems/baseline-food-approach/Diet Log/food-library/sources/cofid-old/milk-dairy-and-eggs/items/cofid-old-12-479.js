/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 4 products",
  "id": "cofid-old-12-479",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream, dairy, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 25.1,
    "energy_kcal": 208.0,
    "fat_g": 10.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.1,
    "magnesium_mg": 11.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 106.0,
    "potassium_mg": 160.0,
    "protein_g": 4.2,
    "salt_g": 0.13,
    "sat_fat_g": 6.87,
    "sodium_mg": 52.0,
    "sugar_g": 24.2,
    "vitamin_a_ug": 68.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-479",
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
