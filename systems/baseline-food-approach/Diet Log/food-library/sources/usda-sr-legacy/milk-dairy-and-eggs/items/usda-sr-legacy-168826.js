/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "package-3-5-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168826",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "package-3-5-oz",
      "kind": "unit",
      "label": "package (3.5 oz)"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "portion-amount-to-make-1-2-cup",
      "kind": "unit",
      "label": "portion, amount to make 1/2 cup"
    }
  ],
  "name": "Puddings, coconut cream, dry mix, instant",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 83.5,
    "energy_kcal": 415.0,
    "fat_g": 10.0,
    "fibre_g": 4.0,
    "folate_ug": 2.0,
    "iron_mg": 0.72,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 721.0,
    "potassium_mg": 96.0,
    "protein_g": 0.9,
    "salt_g": 2.6,
    "sat_fat_g": 10.0,
    "sodium_mg": 1040.0,
    "sugar_g": 64.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168826",
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
