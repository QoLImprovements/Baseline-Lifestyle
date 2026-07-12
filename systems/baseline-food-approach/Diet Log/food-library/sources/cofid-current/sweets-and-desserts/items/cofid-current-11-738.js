/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, including blueberry, cherry, toffee",
  "id": "cofid-current-11-738",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Muffins, American, not chocolate, retail",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 47.8,
    "energy_kcal": 375.0,
    "fat_g": 19.5,
    "fibre_g": 1.8,
    "folate_ug": 9.0,
    "iron_mg": 1.09,
    "magnesium_mg": 10.0,
    "omega3_g": 1.69,
    "phosphorus_mg": 190.0,
    "potassium_mg": 114.0,
    "protein_g": 5.0,
    "salt_g": 0.625,
    "sat_fat_g": 2.4,
    "sodium_mg": 250.0,
    "sugar_g": 27.7,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-738",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
