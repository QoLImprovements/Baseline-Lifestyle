/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "package-3-12-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-170241",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "package-3-12-oz",
      "kind": "unit",
      "label": "package (3.12 oz)"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "portion-amount-to-make-1-2-cup",
      "kind": "unit",
      "label": "portion, amount to make 1/2 cup"
    }
  ],
  "name": "Puddings, banana, dry mix, regular, with added oil",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 88.4,
    "energy_kcal": 1620.0,
    "fat_g": 5.0,
    "fibre_g": 0.3,
    "folate_ug": 0.0,
    "iron_mg": 0.05,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 17.0,
    "protein_g": 0.0,
    "salt_g": 1.97,
    "sat_fat_g": 0.9,
    "sodium_mg": 788.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170241",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "oils-and-fats",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
