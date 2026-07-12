/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "tbsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-169616",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "package-2-oz",
      "kind": "unit",
      "label": "package (2 oz)"
    }
  ],
  "name": "Desserts, rennin, chocolate, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 166.0,
    "carbs_g": 91.5,
    "energy_kcal": 1520.0,
    "fat_g": 3.3,
    "fibre_g": 5.1,
    "folate_ug": 6.0,
    "iron_mg": 2.55,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 430.0,
    "protein_g": 2.4,
    "salt_g": 0.4675,
    "sat_fat_g": 1.94,
    "sodium_mg": 187.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169616",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
