/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including teacakes and Wagon Wheels",
  "id": "cofid-current-11-811",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, fully coated with chocolate, with marshmallow",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 59.9,
    "energy_kcal": 413.0,
    "fat_g": 19.0,
    "fibre_g": 2.7,
    "folate_ug": 8.0,
    "iron_mg": 1.68,
    "magnesium_mg": 28.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 103.0,
    "potassium_mg": 259.0,
    "protein_g": 4.5,
    "salt_g": 0.33,
    "sat_fat_g": 10.64,
    "sodium_mg": 132.0,
    "sugar_g": 41.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-811",
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
