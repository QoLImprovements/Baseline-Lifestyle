/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Oven-baked pastry, 3 brands",
  "id": "cofid-current-11-997",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese and onion rolls, pastry, retail",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 30.4,
    "energy_kcal": 327.0,
    "fat_g": 20.0,
    "fibre_g": 2.9,
    "folate_ug": 9.0,
    "iron_mg": 1.3,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 169.0,
    "protein_g": 8.2,
    "salt_g": 0.775,
    "sat_fat_g": 8.97,
    "sodium_mg": 310.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-997",
  "state": "Unspecified",
  "subcategory": "AT",
  "tags": [
    "at",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
