/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including Wall's, Mackies and own brands",
  "id": "cofid-current-12-508",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ice cream, dairy, vanilla, soft scoop",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 22.0,
    "energy_kcal": 169.0,
    "fat_g": 8.2,
    "fibre_g": 0.2,
    "folate_ug": 6.0,
    "iron_mg": 0.06,
    "magnesium_mg": 13.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 85.0,
    "potassium_mg": 163.0,
    "protein_g": 3.2,
    "salt_g": 0.1575,
    "sat_fat_g": 5.19,
    "sodium_mg": 63.0,
    "sugar_g": 22.0,
    "vitamin_a_ug": 99.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-508",
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
