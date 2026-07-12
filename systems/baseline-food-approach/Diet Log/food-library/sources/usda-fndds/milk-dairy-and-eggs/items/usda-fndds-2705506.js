/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-fl-oz",
  "description": "Milk shakes and other dairy drinks",
  "id": "usda-fndds-2705506",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Milk shake, home recipe, flavors other than chocolate, light",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 13.8,
    "energy_kcal": 92.0,
    "fat_g": 2.33,
    "fibre_g": 0.1,
    "folate_ug": 3.0,
    "iron_mg": 0.07,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 176.0,
    "protein_g": 3.88,
    "salt_g": 0.1275,
    "sat_fat_g": 1.41,
    "sodium_mg": 51.0,
    "sugar_g": 11.1,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705506",
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
