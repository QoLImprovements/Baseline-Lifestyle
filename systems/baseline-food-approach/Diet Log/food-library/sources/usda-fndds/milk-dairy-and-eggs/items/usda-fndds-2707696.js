/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-medium-stick",
  "description": "Rolls and buns",
  "id": "usda-fndds-2707696",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "1-medium-stick",
      "kind": "unit",
      "label": "1 medium stick"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-small-stick",
      "kind": "unit",
      "label": "1 small stick"
    },
    {
      "gramsPerUnit": 77.0,
      "key": "1-large-stick",
      "kind": "unit",
      "label": "1 large stick"
    }
  ],
  "name": "Breadsticks, soft, stuffed or topped with melted cheese",
  "nutritionPerBasis": {
    "calcium_mg": 208.0,
    "carbs_g": 36.4,
    "energy_kcal": 333.0,
    "fat_g": 14.4,
    "fibre_g": 1.9,
    "folate_ug": 122.0,
    "iron_mg": 3.75,
    "magnesium_mg": 23.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 209.0,
    "potassium_mg": 129.0,
    "protein_g": 14.5,
    "salt_g": 1.58,
    "sat_fat_g": 4.7,
    "sodium_mg": 632.0,
    "sugar_g": 1.25,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 17.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707696",
  "state": "Unspecified",
  "subcategory": "Rolls and buns",
  "tags": [
    "milk-dairy-and-eggs",
    "rolls-and-buns",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
