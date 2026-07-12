/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-egg-ns-as-to-size",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707186",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "1-egg-ns-as-to-size",
      "kind": "unit",
      "label": "1 egg, NS as to size"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "1-extra-large-egg",
      "kind": "unit",
      "label": "1 extra large egg"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-medium-egg",
      "kind": "unit",
      "label": "1 medium egg"
    },
    {
      "gramsPerUnit": 222.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "1-large-egg",
      "kind": "unit",
      "label": "1 large egg"
    }
  ],
  "name": "Egg salad, made with creamy dressing",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 2.12,
    "energy_kcal": 212.0,
    "fat_g": 17.7,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 1.0,
    "magnesium_mg": 9.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 174.0,
    "potassium_mg": 113.0,
    "protein_g": 10.2,
    "salt_g": 1.05,
    "sat_fat_g": 4.03,
    "sodium_mg": 420.0,
    "sugar_g": 1.86,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 28.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707186",
  "state": "Unspecified",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
