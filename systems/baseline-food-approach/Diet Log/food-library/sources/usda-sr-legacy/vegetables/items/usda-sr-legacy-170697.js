/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package-18-onion-rings",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170697",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "package-18-onion-rings",
      "kind": "unit",
      "label": "package (18 onion rings)"
    }
  ],
  "name": "Fast foods, onion rings, breaded and fried",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 43.6,
    "energy_kcal": 411.0,
    "fat_g": 25.2,
    "fibre_g": 2.7,
    "folate_ug": 42.0,
    "iron_mg": 0.78,
    "magnesium_mg": 19.0,
    "omega3_g": 0.578,
    "phosphorus_mg": 158.0,
    "potassium_mg": 167.0,
    "protein_g": 3.86,
    "salt_g": 1.94,
    "sat_fat_g": 4.19,
    "sodium_mg": 776.0,
    "sugar_g": 5.43,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 4.92,
    "vitamin_k_ug": 55.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170697",
  "state": "Fried",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fried",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
