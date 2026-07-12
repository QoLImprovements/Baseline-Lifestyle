/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Milk shakes and other dairy drinks",
  "id": "usda-fndds-2705504",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-milkshake-10-fl-oz",
      "kind": "unit",
      "label": "1 milkshake (10 fl oz)"
    }
  ],
  "name": "Milk shake, home recipe, flavors other than chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 11.4,
    "energy_kcal": 113.0,
    "fat_g": 5.98,
    "fibre_g": 0.2,
    "folate_ug": 2.0,
    "iron_mg": 0.03,
    "magnesium_mg": 13.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 102.0,
    "potassium_mg": 167.0,
    "protein_g": 3.35,
    "salt_g": 0.1325,
    "sat_fat_g": 3.62,
    "sodium_mg": 53.0,
    "sugar_g": 10.7,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705504",
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
