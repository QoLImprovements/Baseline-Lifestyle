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
  "id": "usda-sr-legacy-173259",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "biscuit",
      "kind": "unit",
      "label": "biscuit"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Pillsbury, Buttermilk Biscuits, Artificial Flavor, refrigerated dough",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 47.1,
    "energy_kcal": 985.0,
    "fat_g": 2.79,
    "fibre_g": 1.6,
    "folate_ug": 0.0,
    "iron_mg": 2.6,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 6.4,
    "salt_g": 2.135,
    "sat_fat_g": 0.42,
    "sodium_mg": 854.0,
    "sugar_g": 4.46,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173259",
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
