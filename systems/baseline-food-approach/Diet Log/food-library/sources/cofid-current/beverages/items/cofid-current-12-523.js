/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "10 samples, 9 brands",
  "id": "cofid-current-12-523",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Milk, soya, non-dairy alternative to milk, sweetened, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 2.5,
    "energy_kcal": 43.0,
    "fat_g": 2.4,
    "fibre_g": 0.5,
    "folate_ug": 9.0,
    "iron_mg": 0.31,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 89.0,
    "potassium_mg": 119.0,
    "protein_g": 3.1,
    "salt_g": 0.14,
    "sat_fat_g": 0.38,
    "sodium_mg": 56.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.69
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-523",
  "state": "Unspecified",
  "subcategory": "BC",
  "tags": [
    "bc",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
