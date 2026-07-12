/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "extra-large",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172769",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "extra-large",
      "kind": "unit",
      "label": "extra large"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "mini",
      "kind": "unit",
      "label": "mini"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 139.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Muffins, oat bran",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 48.3,
    "energy_kcal": 1130.0,
    "fat_g": 7.4,
    "fibre_g": 4.6,
    "folate_ug": 89.0,
    "iron_mg": 4.2,
    "magnesium_mg": 157.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 376.0,
    "potassium_mg": 507.0,
    "protein_g": 7.0,
    "salt_g": 0.9825,
    "sat_fat_g": 1.09,
    "sodium_mg": 393.0,
    "sugar_g": 8.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 13.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172769",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
