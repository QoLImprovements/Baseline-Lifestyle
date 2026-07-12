/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167559",
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
    }
  ],
  "name": "Snacks, tortilla chips, nacho cheese",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 60.8,
    "energy_kcal": 519.0,
    "fat_g": 27.4,
    "fibre_g": 5.1,
    "folate_ug": 13.0,
    "iron_mg": 1.16,
    "magnesium_mg": 75.0,
    "omega3_g": 0.262,
    "phosphorus_mg": 252.0,
    "potassium_mg": 223.0,
    "protein_g": 7.36,
    "salt_g": 1.7275,
    "sat_fat_g": 3.88,
    "sodium_mg": 691.0,
    "sugar_g": 2.59,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 6.24,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167559",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "milk-dairy-and-eggs",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
