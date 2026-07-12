/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Quaker Oat So Simple; 6 samples, 4 products, including golden syrup, berry and baked apple flavour. 36g sachet made up with 180g milk",
  "id": "cofid-current-11-795",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, Oat, instant, flavoured, unfortified, made up with semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 15.6,
    "energy_kcal": 98.0,
    "fat_g": 2.4,
    "fibre_g": 1.0,
    "folate_ug": 10.0,
    "iron_mg": 0.47,
    "magnesium_mg": 24.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 132.0,
    "potassium_mg": 195.0,
    "protein_g": 4.4,
    "salt_g": 0.175,
    "sat_fat_g": 1.1,
    "sodium_mg": 70.0,
    "sugar_g": 7.8,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-795",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
