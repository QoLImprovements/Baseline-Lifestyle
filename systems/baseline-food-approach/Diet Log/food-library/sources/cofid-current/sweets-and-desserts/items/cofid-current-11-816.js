/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 10 products, including milk, plain and white chocolate from instore bakeries and catering outlets",
  "id": "cofid-current-11-816",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, cookies, chocolate chip, American style",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 60.6,
    "energy_kcal": 440.0,
    "fat_g": 21.3,
    "fibre_g": 2.5,
    "folate_ug": 12.0,
    "iron_mg": 2.49,
    "magnesium_mg": 36.0,
    "omega3_g": 0.55,
    "phosphorus_mg": 155.0,
    "potassium_mg": 252.0,
    "protein_g": 5.2,
    "salt_g": 1.055,
    "sat_fat_g": 9.58,
    "sodium_mg": 422.0,
    "sugar_g": 40.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-816",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
