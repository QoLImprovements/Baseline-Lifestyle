/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-soda-10-fl-oz",
  "description": "Milk shakes and other dairy drinks",
  "id": "usda-fndds-2705657",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-soda-10-fl-oz",
      "kind": "unit",
      "label": "1 soda (10 fl oz)"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 192.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Ice cream soda, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 15.2,
    "energy_kcal": 87.0,
    "fat_g": 2.9,
    "fibre_g": 0.3,
    "folate_ug": 4.0,
    "iron_mg": 0.28,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 66.0,
    "protein_g": 1.0,
    "salt_g": 0.075,
    "sat_fat_g": 1.79,
    "sodium_mg": 30.0,
    "sugar_g": 14.5,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705657",
  "state": "Unspecified",
  "subcategory": "Milk shakes and other dairy drinks",
  "tags": [
    "milk-dairy-and-eggs",
    "milk-shakes-and-other-dairy-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
