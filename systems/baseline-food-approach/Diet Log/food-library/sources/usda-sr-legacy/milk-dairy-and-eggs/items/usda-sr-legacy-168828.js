/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "portion-amount-to-make-1-2-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168828",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "portion-amount-to-make-1-2-cup",
      "kind": "unit",
      "label": "portion, amount to make 1/2 cup"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "package-3-12-oz",
      "kind": "unit",
      "label": "package (3.12 oz)"
    }
  ],
  "name": "Puddings, coconut cream, dry mix, regular",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 81.8,
    "energy_kcal": 434.0,
    "fat_g": 11.4,
    "fibre_g": 1.6,
    "folate_ug": 2.0,
    "iron_mg": 0.57,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 133.0,
    "protein_g": 1.0,
    "salt_g": 1.705,
    "sat_fat_g": 11.4,
    "sodium_mg": 682.0,
    "sugar_g": 80.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168828",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
