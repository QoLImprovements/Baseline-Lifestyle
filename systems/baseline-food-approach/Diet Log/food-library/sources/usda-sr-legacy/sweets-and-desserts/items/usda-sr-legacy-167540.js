/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167540",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "packet-75-oz",
      "kind": "unit",
      "label": "packet (.75 oz)"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Snacks, fruit leather, pieces",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 82.8,
    "energy_kcal": 1500.0,
    "fat_g": 2.68,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.75,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 164.0,
    "protein_g": 1.0,
    "salt_g": 0.4975,
    "sat_fat_g": 0.65,
    "sodium_mg": 199.0,
    "sugar_g": 57.6,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 56.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 18.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167540",
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
