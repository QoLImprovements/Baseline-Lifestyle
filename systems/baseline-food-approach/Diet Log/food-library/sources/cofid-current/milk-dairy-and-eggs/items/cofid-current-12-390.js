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
  "id": "cofid-current-12-390",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lollies, containing ice-cream",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 20.9,
    "energy_kcal": 118.0,
    "fat_g": 3.8,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.2,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 69.0,
    "protein_g": 1.4,
    "salt_g": 0.0775,
    "sat_fat_g": 2.07,
    "sodium_mg": 31.0,
    "sugar_g": 20.9,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-390",
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
