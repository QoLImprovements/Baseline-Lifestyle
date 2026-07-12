/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar-1-25-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167545",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "bar-1-25-oz",
      "kind": "unit",
      "label": "bar (1.25 oz)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "bar-1-oz",
      "kind": "unit",
      "label": "bar (1 oz)"
    }
  ],
  "name": "Snacks, granola bars, soft, coated, milk chocolate coating, chocolate chip",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 63.8,
    "energy_kcal": 1950.0,
    "fat_g": 24.9,
    "fibre_g": 3.4,
    "folate_ug": 26.0,
    "iron_mg": 2.33,
    "magnesium_mg": 66.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 199.0,
    "potassium_mg": 313.0,
    "protein_g": 5.8,
    "salt_g": 0.5,
    "sat_fat_g": 14.2,
    "sodium_mg": 200.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167545",
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
