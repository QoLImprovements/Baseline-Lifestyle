/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172297",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Babyfood, cereal, oatmeal, with bananas, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 153.0,
    "carbs_g": 10.0,
    "energy_kcal": 86.0,
    "fat_g": 3.46,
    "fibre_g": 0.4,
    "folate_ug": 6.0,
    "iron_mg": 3.63,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 178.0,
    "protein_g": 3.82,
    "salt_g": 0.12,
    "sat_fat_g": 1.82,
    "sodium_mg": 48.0,
    "sugar_g": 5.9,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172297",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
