/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "3 samples",
  "id": "cofid-old-12-179",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, dairy free hard cheese alternative",
  "nutritionPerBasis": {
    "calcium_mg": 450.0,
    "carbs_g": 0.0,
    "energy_kcal": 319.0,
    "fat_g": 27.3,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 1.1,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 350.0,
    "potassium_mg": 130.0,
    "protein_g": 18.3,
    "salt_g": 1.5,
    "sat_fat_g": 0.0,
    "sodium_mg": 600.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-179",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
