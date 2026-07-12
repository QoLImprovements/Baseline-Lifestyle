/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe. Calculated from 25g powder to 200ml milk",
  "id": "cofid-current-17-819",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ovaltine powder, made up with skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 200.0,
    "carbs_g": 13.5,
    "energy_kcal": 70.0,
    "fat_g": 0.4,
    "fibre_g": 0.5,
    "folate_ug": 28.0,
    "iron_mg": 1.58,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 161.0,
    "protein_g": 3.9,
    "salt_g": 0.1325,
    "sat_fat_g": 0.27,
    "sodium_mg": 53.0,
    "sugar_g": 9.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 1.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-819",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "milk-dairy-and-eggs",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
