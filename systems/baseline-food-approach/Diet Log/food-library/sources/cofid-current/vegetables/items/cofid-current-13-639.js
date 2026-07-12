/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Calculated from steamed. Water and fat analysed, 2017. 7 samples, fresh, imported, including tips and thicker stems. Tough base of stems removed, grilled for 4-6 minutes",
  "id": "cofid-current-13-639",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Asparagus, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 2.0,
    "energy_kcal": 25.1,
    "fat_g": 0.4,
    "fibre_g": 1.6,
    "folate_ug": 122.0,
    "iron_mg": 0.6,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 339.0,
    "protein_g": 3.5,
    "salt_g": 0.0075,
    "sat_fat_g": 0.06,
    "sodium_mg": 3.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 1.74,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-639",
  "state": "Grilled",
  "subcategory": "DG",
  "tags": [
    "dg",
    "grilled",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
