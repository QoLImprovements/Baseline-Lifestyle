/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "biscuit",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172668",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 398.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Biscuits, plain or buttermilk, refrigerated dough, higher fat",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 46.3,
    "energy_kcal": 1280.0,
    "fat_g": 10.6,
    "fibre_g": 0.7,
    "folate_ug": 57.0,
    "iron_mg": 2.48,
    "magnesium_mg": 17.0,
    "omega3_g": 0.036,
    "phosphorus_mg": 470.0,
    "potassium_mg": 162.0,
    "protein_g": 6.66,
    "salt_g": 2.4425,
    "sat_fat_g": 2.81,
    "sodium_mg": 977.0,
    "sugar_g": 7.4,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172668",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
